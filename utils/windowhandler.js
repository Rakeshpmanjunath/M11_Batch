export async function window(page,action) {
    let [popup] = await Promise.all([
        page.waitForEvent('popup'),
        action
    ])
    return popup
}

/*
let [popup] = await Prommis.all([
page.waitForEvent('popup'),
locator
])
*/ 