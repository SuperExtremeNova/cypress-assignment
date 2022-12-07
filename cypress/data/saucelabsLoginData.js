module.exports = 
[
    {
        username: "standard_user",
        password: "secret_sauce",
        expected_url: "https://www.saucedemo.com/inventory.html"
    },
    {
        username: "locked_out_user",
        password: "secret_sauce",
        expected_url: "https://www.saucedemo.com/",
        expected_error: "locked out"
    },
    {
        username: "problem_user",
        password: "secret_sauce",
        expected_url: "https://www.saucedemo.com/inventory.html"
    },
    {
        username: "invalid_user",
        password: "check",
        expected_url: "https://www.saucedemo.com/",
        expected_error: "Epic sadface"
    }
]
