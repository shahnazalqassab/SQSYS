import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUsers } from '../services/User'
import UserList from '../components/UserList'
import UserForm from '../components/UserForm'
import UserEdit from '../components/UserEdit'


