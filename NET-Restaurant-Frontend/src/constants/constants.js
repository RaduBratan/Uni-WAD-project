export const serviceConstants = [
{
    name: "Authorization",
    actions: [
    {
        name: "Create User",
        method: "POST",
        url: "api/AuthController/createUser",
        params: [["Password", "string"], ["Email", "string"], ["FirstName", "?string"], ["LastName", "?string"]]
    },
    {
        name: "Login",
        url: "POST",
        url: "api/AuthController/loginUser",
        params: [["Password", "string"], ["Email", "string"], ["FirstName", "string?"], ["LastName", "string?"]]
    }
    ],
},
{
    name: "Restaurant",
    actions: [
    {
        name: "Get Restaurants",
        method: "GET",
        url: "api/RestaurantController/getRestaurants",
        params: []
    },
    {
        name: "Get Restaurant",
        url: "GET",
        url: "api/RestaurantController/getRestaurant",
        params: [["restaurantId", "Guid"]]
    },
    {
        name: "Create",
        method: "POST",
        url: "api/RestaurantController/create",
        params: [["Title", "string"]],
    },
    {
        name: "Delete",
        url: "POST",
        url: "api/RestaurantController/delete",
        params: [["RestaurantId", "Guid"]],
    }
    ],
}, 
{
    name: "Employee",
    actions: [
    {
        name: "Get Employees",
        method: "GET",
        url: "api/EmployeeController/getEmployees",
        params: [],
    },
    {
        name: "Get Employee By Id",
        url: "GET",
        url: "api/EmployeeController/getEmployee/id",
        params: [["employeeId", "Guid"]],
    },
    {
        name: "Get Employee By Email",
        url: "GET",
        url: "api/EmployeeController/getEmployee/email",
        params: [["employeeEmail", "string"]],
    },
    {
        name: "Create",
        method: "POST",
        url: "api/EmployeeController/create",
        params: [["FirstName", "string"], ["LastName", "string"], ["Email", "string"], ["Age", "int"], ["Revenue", "int"], ["RestaurantId", "Guid"]],
    },
    {
        name: "Delete",
        url: "POST",
        url: "api/EmployeeController/delete",
        params: [["employeeId", "Guid"]]
    }
    ],
}, 
{
    name: "Manager",
    actions: [
    {
        name: "Get Managers",
        method: "GET",
        url: "api/ManagerController/getManagers",
        params: [],
    },
    {
        name: "Get Manager",
        url: "GET",
        url: "api/ManagerController/getManager",
        params: [["managerId", "Guid"]],
    },
    {
        name: "Create",
        method: "POST",
        url: "api/ManagerController/create",
        params: [["FirstName", "string"], ["LastName", "string"], ["Email", "string"], ["Age", "int"], ["Revenue", "int"], ["RestaurantId", "Guid"]],
    },
    {
        name: "Delete",
        url: "POST",
        url: "api/ManagerController/delete",
        params: [["managerId", "Guid"]]
    }
    ],
},
{
    name: "Recipe",
    actions: [
    {
        name: "Get Recipes",
        method: "GET",
        url: "api/RecipeController/getRecipes",
        params: [],
    },
    {
        name: "Get Recipe",
        url: "GET",
        url: "api/RecipeController/getRecipe",
        params: [["recipeId", "Guid"]],
    },
    {
        name: "Create",
        method: "POST",
        url: "api/RecipeController/create",
        params: [["Name", "string"]],
    },
    {
        name: "Delete",
        url: "POST",
        url: "api/RecipeController/delete",
        params: [["recipeId", "Guid"]]
    }
    ],
},
{
    name: "User",
    actions: [
    {
        name: "Get Users",
        method: "GET",
        url: "api/UserController/getUsers",
        params: [],
    },
    {
        name: "Get User",
        url: "GET",
        url: "api/UserController/getUser",
        params: [["userId", "Guid"]],
    },
    {
        name: "Create",
        url: "POST",
        url: "api/UserController/create",
        params: [["Password", "string"], ["Email", "string"], ["FirstName", "string?"], ["LastName", "string?"]],
    },
    {
        name: "Delete",
        url: "POST",
        url: "api/UserController/delete",
        params: [["userId", "Guid"]]
    }
    ],
  }
]