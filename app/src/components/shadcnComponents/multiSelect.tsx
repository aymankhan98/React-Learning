"use client"

import * as React from "react"
import { Button } from "@/src/components/composable/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/composable/popover"

interface Todo {
  id: number
  title: string
  completed: boolean
}

const fetchTodos = async (query: string): Promise<Todo[]> => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    if (!response.ok) {
      throw new Error('Failed to fetch todos')
    }
    const todos: Todo[] = await response.json()
    return todos.filter(todo => todo.title.toLowerCase().includes(query.toLowerCase()))
  } catch (error) {
    console.error('Error fetching todos:', error)
    return []
  }
}

export default function TodoSelect() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const [inputValue, setInputValue] = React.useState("")
  const [todos, setTodos] = React.useState<Todo[]>([])
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    if (inputValue.length >= 3) {
      setIsLoading(true)
      setError(null)
      fetchTodos(inputValue)
        .then(fetchedTodos => {
          setTodos(fetchedTodos)
          setIsLoading(false)
        })
        .catch(err => {
          console.error('Error fetching todos:', err)
          setError('Failed to fetch todos. Please try again.')
          setTodos([])
          setIsLoading(false)
        })
    } else {
      setTodos([])
    }
  }, [inputValue])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[300px] justify-between">
          {value || "Select a todo..."}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <div className="p-2">
          <input
            type="text"
            placeholder="Search todos..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full p-2 border rounded"
          />
       
          {!isLoading && !error && todos.length > 0 && (
            <ul className="mt-2">
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  onClick={() => {
                    setValue(todo.title)
                    setOpen(false)
                  }}
                  className="cursor-pointer hover:bg-gray-100 p-2"
                >
                  {todo.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}
