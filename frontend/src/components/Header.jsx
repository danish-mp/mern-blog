import React, { useState } from 'react'
import {Button, Navbar, TextInput} from "flowbite-react"
import { Link } from 'react-router-dom'
import {AiOutlineSearch } from "react-icons/ai"

function Header() {
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <div>
          <Navbar  className='border-b-2'>
              <Link
                  to={"/"}
                  className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
                  <span className='px-2 py-1 bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                      Movies
                  </span>
                  Blog
        </Link>

        <form>
          <TextInput
            type='text'
            placeholder='Search...'
            rightIcon={AiOutlineSearch}
            className='hidden lg:inline'
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            

          />
        </form>
        <Button className='w-12 h-10 lg:hidden' color="gray" pill>
          <AiOutlineSearch/>
        </Button>
        

        
          </Navbar>
        
        
    </div>
  )
}

export default Header
