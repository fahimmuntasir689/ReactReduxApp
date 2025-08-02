import { createBrowserRouter } from 'react-router'
import App from '../App'
import Home from '../components/Home/Home'
import Tasks from '../components/Tasks/Tasks'
import Users from '../components/Users/Users'

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children : [
            {
                path : '/',
                Component : Home
            },
            {
                path : '/tasks',
                Component : Tasks
            },
            {
                path : '/users',
                Component : Users
            }
        ]
    }
])