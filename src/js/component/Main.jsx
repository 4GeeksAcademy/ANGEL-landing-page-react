import React from "react";
import Card from "./Card";

export default function Main({children}){
    return(
        <main className="main container flex-column">
            <section className="container-fluid bg-light">
                <h1 className="py-1">A Warm Welcome</h1>
                <p className="py-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore quae blanditiis iste numquam, totam similique quos vitae facilis ipsam? Nesciunt repudiandae ad atque perferendis aut, accusantium numquam ratione tenetur.</p>
                <button className="btn btn-primary my-1 mb-5">Call to action!</button>
            </section>
            <section className="container text-center">
                <div className="row p-0 my-5">
                    <div className="col pr-0">
                        <Card/>
                    </div>
                    <div className="col">
                        <Card/>
                    </div>
                    <div className="col">
                        <Card/>
                    </div>
                    <div className="col">
                        <Card/>
                    </div>
                </div>
            </section>
        </main>
    )
}