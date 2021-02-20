class  Authenticationservice
{   
    registersucessfulllogin(username,password)
    {  
        alert("register Sucessfull")
        sessionStorage.setItem('authenticated',username);

    }
    logout()
    {
        sessionStorage.removeItem('authenticated');

    }
    isUserloggedin()
    {
        let user=sessionStorage.getItem('authenticated');
        if(user===null)
        return false;
        else
        return true;
    }

}
export default new Authenticationservice();