import React from 'react'
import Hero from '../components/Hero'
import Biography from '../components/Biography'
import Departments from '../components/Departments'
import MessageForm from '../components/MessageForm'
function Home() {
  return (
    <>
      <Hero
      title={
        "Welcome to Code Health Medical Center | Your Trusted Healthcare Provider"
      }
      imageUrl={"/Hero_doct.png"}
       />
      <Biography imageUrl={"/doc_team.png"} />
      <Departments />
      <MessageForm />

    </>
  )
}

export default Home
