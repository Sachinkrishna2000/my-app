import React from "react";
import './Functional.css';
//import the Functional.css
// import '../Styles/Functional.css';
//we can create many components
//we can export only one component

//Functional component -> return( embed HTML )
//export default function FunctionalComponent()
//Components - must start with an Uppercase
function FunctionalComponent()
{
 return(
    <>
    <h4>I AM THE FIRST FUNCTIONAL COMPONENT</h4>
    </>
 )
}

//only one export
export default FunctionalComponent;