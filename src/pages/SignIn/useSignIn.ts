import { useSelector } from "react-redux"
import { login } from 'src/redux/actions'
import { usePage } from "src/hooks/usePage"
import { toast } from 'react-toastify';

export const useSignIn = () => {
  const users = useSelector((state: any) => state.users)
  const { dispatch, navigate } = usePage()
  

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)

        checkUser(data)
    }

    const checkUser = (data) => {
      const user = users.find((user) => user.email === data.get('email'))

      if (!user) {
        toast.error('Упс. Невірні данні')
      }

      if (user && user.password !== data.get('password')) {
        toast.error('Пароль невірний')
      }


      if (user && user.password === data.get('password')) {
        dispatch(login(true))
        navigate('/game')
      }
    }

    return {
      handleSubmit
    }
}