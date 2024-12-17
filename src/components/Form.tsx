import { useForm } from "../hooks/useForm";

interface FormData {
    email: string;
    name: string;
}

export const Form = () => {
    const {form, handleForm} = useForm<FormData>({
        email: '',
        name: ''
    });

    const {email, name} = form;

  return (
    <form autoComplete='off'>
        <div className="mb-3">
            <label className='form-label'>Email address</label>
            <input type="email" className="form-control" name='email' onChange={handleForm} value={email}/>
        </div>
        <div className="mb-3">
            <label className='form-label'>Name</label>
            <input type="text" className="form-control" name='name' onChange={handleForm} value={name}/>
        </div>
        <pre>{JSON.stringify(form)}</pre>
    </form>
  )
}
