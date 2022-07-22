import "./RecipeTitle.css"
import React from "react"

export default function RecipeTitle(props) {
    return (
        <section>
            {props.children}
            <h3 className={ props.feedback.rating <= 3.5 ? 'red_text' : 'acer_text' }>
                { props.feedback.rating } from { props.feedback.reviews } reviews
            </h3>
        </section> 
    )
}
