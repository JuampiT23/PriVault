
const Button = ({isPrimary}) => {

    return (
        <button className={isPrimary ? 'btn btn-primary' : 'btn btn-secondary'}>
            {isPrimary ? 'Primary' : 'Secondary'}
        </button>
    )
}

const Greetins = ({isLoggedIn}) => {
    return (
        <div>
        {isLoggedIn ? <h1>Estas logueado</h1> : <h1>Estas deslogueado</h1>}
        </div>
    )
}

const Welcome = ({isLogged}) => 
        <div>
            {isLogged ? <h1>Welcome</h1> : <h1>Not Welcome</h1>}
        </div>

function AppRendering() {
  return (
    <div>
        <Button isPrimary={true} />
        <Button isPrimary={false} />
        <Greetins isLoggedIn={false} />
        <Welcome isLogged={false} />
    </div>
  )
}

export default AppRendering