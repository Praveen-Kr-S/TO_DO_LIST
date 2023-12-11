import AddItem from "./AddItem";
import Footer from "./Footer";
import Header from "./Header";
import Listandkeys from "./Listandkeys";
import React, { useState, useEffect  } from 'react';
import SearchItem from "./SearchItem";
import apiRequest from "./apiRequest";



function App() {

    const API_URL = 'http://localhost:3500/items';
    /* || USE STATES Hook */
    /* #1 */
    const [items, setItems] = useState(
        /* JSON.parse(localStorage.getItem('to_do_list')) || */ []);

    /* #2 */
    const [newItem, setNewItem] = useState('');

    /* #3 */
    const [search, setSearch] = useState('');
    /* #4 */
    const [fetchError, setFetchError] = useState(null);
    /* #5 */
    const [isLoading, setIsLoading] = useState(true);

    /* || USEEFFECT HOOK */
    useEffect (() => {
        /* JSON.parse(localStorage.getItem('to_do_list')) */  
        const fetchItems = async () => {
            try {
                const response = await fetch(API_URL);
                if(!response.ok) throw Error("Data not received")
            const listItems = await response.json();
            setItems(listItems)
            } catch (err) {
                setFetchError(err.message)
            } finally{
                setIsLoading(false)
            }   
        }
            setTimeout(() => {
                (async () => await fetchItems())()
            }, 1000);
        
        }, [])

    /*  || FUNCTIONS */
    
    const addItem = async (item) => {
        const id = items.length ? items[items.length - 1].id+1 : 1;
        const addNewItem = {id, Checked : false, item}
        const listItems = [...items, addNewItem]
        setItems(listItems)
        /* localStorage.setItem("to_do_list", JSON.stringify(listItems)) */

        const postOptions = {
            method : 'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body : JSON.stringify(addNewItem)
        }

        const result = await apiRequest(API_URL,postOptions)
        if(result) setFetchError(result)
    }

    const handleCheck = async (id) => {
        const listItems = items.map((item) => item.id===id ? {...item,checked:!item.checked}:item)
        setItems(listItems)
        /* localStorage.setItem("to_do_list", JSON.stringify(listItems)) */

        const myItem = listItems.filter((item) => item.id===id)

        const updateOptions = {
            method : 'PATCH',
            headers : {'Content-Type':'application/json'},
            body : JSON.stringify({checked: myItem[0].checked})
        }
        const reqUrl = `${API_URL}/${id}`
        const result = await apiRequest(reqUrl,updateOptions)
        if(result) setFetchError(result)
    }

    const handleDelete = async (id) => {
        const listItems = items.filter((item) => item.id !== id)
        setItems(listItems)
        /* localStorage.setItem("to_do_list", JSON.stringify(listItems)) */

        const deleteOptions = {
            method : 'DELETE',
        }
        const reqUrl = `${API_URL}/${id}`
        const result = await apiRequest(reqUrl,deleteOptions)
        if(result) setFetchError(result)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!newItem) return;
        console.log(newItem)
        addItem(newItem)
        setNewItem('')
    }


  return (
  <div className= "App">

    <Header 
        title = "To Do List"
    />

    <AddItem
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
    />
    
    <SearchItem
        search = {search}
        setSearch = {setSearch}
    />

    <main>
        {isLoading && <p>Loading Items..</p>}
        {fetchError && <p>{`Error: ${fetchError}`}</p>}
        {!isLoading &&!fetchError && <Listandkeys
            items ={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
            handleCheck = {handleCheck}
            handleDelete = {handleDelete}
        />}
    </main>
    
    <Footer 
        length = {items.length}
    />
    

  </div>
  );
}

export default App;
