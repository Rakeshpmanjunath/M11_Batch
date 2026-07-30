import {test as base} from '@playwright/test'
import { loginclass } from '../pages/login'

export let test = base.extend({
    login : async ({page},use) => {
        let signin = new loginclass(page)
        await signin.launchurl()
        await signin.details()
        await use(page)
    }
}) 