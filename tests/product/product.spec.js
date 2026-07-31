import {test} from "@playwright/test"
import login from "../../testdata/login.json"
import product from "../../testdata/product.json"
import { loginclass } from "../../pages/login"
import { ProductModule } from "../../pages/product_POM"
import { waitForDebugger } from "node:inspector"

    // test('product module',async ({page}) => {
    // //! login to the application
    // await page.goto('http://localhost:8888/')
    // await page.locator('//input[@name="user_name"]').fill('admin')
    // await page.locator('//input[@name="user_password"]').fill('admin')
    // await page.getByRole('button',{name:'Login'}).click()

    //  //! creating the product
    // await page.getByRole('link',{name:'Products'}).click()
    // await page.getByRole('img',{name:'Create Product...'}).click()
    // await page.locator('//input[@name="productname"]').fill("VtigerWMS")
    // let prodt = await page.locator('//input[@name="productname"]').inputValue()
    // await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()

    // //!validation
    // let valid = await page.locator('//span[@id="dtlview_Product Name"]').textContent()
    // if(prodt===valid){
    //     console.log('Product is created');
    // }else{
    //     console.log('Product is not created');
    // }
    // await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    // await page.locator('//a[text()="Sign Out"]').click()

    // })

    test('product module POM',async ({page}) => {
    //! login to the application

    let signin = new loginclass(page)

    await signin.launchurl(login.url)
    await signin.details(login.username,login.password)

    let newproduct = new ProductModule(page)

    await newproduct.clickproductlink()
    await newproduct.clicknewproductbutton()
    await newproduct.createnewproduct(product.Product_Name)
    await newproduct.singout()

    })