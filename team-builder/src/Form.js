import React from 'react'

export default function Form(props) {
    const { values, update, submit } = props
    const onChange = evt => { 
        const { name, value} = evt.target;
        update(name, value);
        

    }
    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }
    return (
        <form className='form container' onSubmit={onSubmit}>
          <div className='form-group inputs'>

            <label>Name
                  <input
                    name="name"
                    type="text"
                    placeholder="Type your username here ya chump!"
                    maxLength="30"
                    value={values.name}
                    onChange={onChange}
                  />
            </label>
    
            <label>Email
                  <input
                    name="email"
                    type="email"
                    placeholder="EMAIL ME"
                    value={values.email}
                    onChange={onChange}
                  />
            </label>
            <label>Role
                  <select value={values.role} name="role" onChange={onChange}>
                    <option value="">-- Select a Role --</option>
                    <option value="Backend engineer">Backend engineer</option>
                    <option value="Frontend engineer">Frontend engineer</option>
                    <option value="Designer">Designer</option>
                  </select>
            </label>
    
            <div className='submit'>
              <button>submit</button>
            </div>
          </div>
        </form>
      )
}