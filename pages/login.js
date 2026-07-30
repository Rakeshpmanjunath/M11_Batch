import login from "../testdata/login.json"

export class loginclass{
    constructor(page){
        this.page=page;
        this.username = page.locator('//input[@name="user_name"]')
        this.password = page.locator('//input[@name="user_password"]')
        this.button = page.getByRole('button',{name:'Login'})
    }

    async launchurl(){
        await this.page.goto(login.url)
    }
    async details(username,password){
        await this.username.fill(login.username)
        await this.password.fill(login.password)
        await this.button.click()
    }

}