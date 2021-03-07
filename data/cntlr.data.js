import capitalize from "../utils/capitalize.js"

export const data = (cntlrname) => {
    const name = capitalize(cntlrname)
return `/*
@@ ROUTE   /api/{}/create
@@ METHOD  POST
@@ DESC    Create and Save 
*/

export const create${name} = async (req, res) => {
    try {
        // Fetch data here
    } catch (error) {
        // Handle error here
    }
}
/*
@@ ROUTE   /api/{}/
@@ METHOD  GET
@@ DESC    Fetch data from Database 
*/

export const read${name}  = async (req, res) => {
    try {
        // Fetch data here
    } catch (error) {
        // Handle error here
    }
}
/*
@@ ROUTE   /api/{}/update/:id
@@ METHOD  PUT
@@ DESC    Update {} by ID
*/

export const update${name}  = async (req, res) => {
    try {
        // Fetch data here
    } catch (error) {
        // Handle error here
    }
}
/*
@@ ROUTE   /api/{}/delete/:id
@@ METHOD  DELETE
@@ DESC    Delete {} by ID
*/

export const delete${name}  = async (req, res) => {
    try {
        // Fetch data here
    } catch (error) {
        // Handle error here
    }
}`
}
