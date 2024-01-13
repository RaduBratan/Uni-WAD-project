export const serviceConstants = [
  {
    id: 1,
    name: "Authorization",
    actions: [
      {
        id: 1,
        name: "Create User",
        method: "POST",
        url: "api/Auth/createUser",
        bodyProperties: [["password", "string"], ["email", "string"], ["firstName", "string?"], ["lastName", "string?"]],
        params: []
      },
      {
        id: 2,
        name: "Create Admin",
        method: "POST",
        url: "api/Auth/createAdmin",
        bodyProperties: [["password", "string"], ["email", "string"], ["firstName", "string?"], ["lastName", "string?"]],
        params: []
      },
      {
        id: 3,
        name: "Login",
        method: "POST",
        url: "api/Auth/loginUser",
        bodyProperties: [["password", "string"], ["email", "string"], ["firstName", "string?"], ["lastName", "string?"]],
        params: []
      }
    ],
  },
  {
    id: 2,
    name: "Restaurant",
    actions: [
      {
        id: 1,
        name: "Get Restaurants",
        method: "GET",
        url: "api/Restaurant/getRestaurants",
        bodyProperties: [],
        params: []
      },
      {
        id: 2,
        name: "Get Restaurant",
        method: "GET",
        url: "api/Restaurant/getRestaurant",
        params: [["restaurantId", "Guid"]],
        bodyProperties: []
      },
      {
        id: 3,
        name: "Create",
        method: "POST",
        url: "api/Restaurant/create",
        params: [],
        bodyProperties: [["title", "string"]],
      },
      {
        id: 4,
        name: "Update",
        method: "POST",
        url: "api/Restaurant/update",
        params: [["restaurantId", "Guid"]],
        bodyProperties: [["title", "string"]],
      },
      {
        id: 5,
        name: "Delete",
        method: "POST",
        url: "api/Restaurant/delete",
        bodyProperties: [],
        params: [["restaurantId", "Guid"]],
      }
    ],
  },
  {
    id: 3,
    name: "Employee",
    actions: [
      {
        id: 1,
        name: "Get Employees",
        method: "GET",
        url: "api/Employee/getEmployees",
        bodyProperties: [],
        params: [],
      },
      {
        id: 2,
        name: "Get Employee By Id",
        method: "GET",
        url: "api/Employee/getEmployee/id",
        params: [["employeeId", "Guid"]],
        bodyProperties: [],
      },
      {
        id: 3,
        name: "Get Employee By Email",
        method: "GET",
        url: "api/Employee/getEmployee/email",
        params: [["employeeEmail", "string"]],
        bodyProperties: [],
      },
      {
        id: 4,
        name: "Create",
        method: "POST",
        url: "api/Employee/create",
        params: [],
        bodyProperties: [
          ["firstName", "string"],
          ["lastName", "string"],
          ["email", "string"],
          ["age", "int"],
          ["revenue", "int"],
          ["restaurantId", "Guid"]
        ],
      },
      {
        id: 5,
        name: "Update",
        method: "POST",
        url: "api/Employee/update",
        params: [["employeeId", "Guid"]],
        bodyProperties: [
          ["firstName", "string"],
          ["lastName", "string"],
          ["email", "string"],
          ["age", "int"],
          ["revenue", "int"],
          ["restaurantId", "Guid"]
        ],
      },
      {
        id: 6,
        name: "Delete",
        method: "POST",
        url: "api/Employee/delete",
        params: [["employeeId", "Guid"]],
        bodyProperties: []
      }
    ],
  },
  {
    id: 4,
    name: "Manager",
    actions: [
      {
        id: 1,
        name: "Get Managers",
        method: "GET",
        url: "api/Manager/getManagers",
        bodyProperties: [],
        params: [],
      },
      {

        id: 2,
        name: "Get Manager",
        method: "GET",
        url: "api/Manager/getManager",
        params: [["managerId", "Guid"]],
        bodyProperties: [],
      },
      {
        id: 3,
        name: "Create",
        method: "POST",
        url: "api/Manager/create",
        params: [],
        bodyProperties: [
          ["firstName", "string"],
          ["lastName", "string"],
          ["email", "string"],
          ["age", "int"],
          ["revenue", "int"],
          ["restaurantId", "Guid"]],
      },
      {
        id: 4,
        name: "Update",
        method: "POST",
        url: "api/Manager/update",
        params: [["manageId", "Guid"]],
        bodyProperties: [
          ["firstName", "string"],
          ["lastName", "string"],
          ["email", "string"],
          ["age", "int"],
          ["revenue", "int"],
          ["restaurantId", "Guid"]],
      },
      {
        id: 5,
        name: "Delete",
        method: "POST",
        url: "api/Manager/delete",
        params: [["managerId", "Guid"]],
        bodyProperties: [],
      }
    ],
  },
  {
    id: 5,
    name: "Recipe",
    actions: [
      {
        id: 1,
        name: "Get Recipes",
        method: "GET",
        url: "api/Recipe/getRecipes",
        bodyProperties: [],
        params: [],
      },
      {
        id: 2,
        name: "Get Recipe",
        method: "GET",
        url: "api/Recipe/getRecipe",
        params: [["recipeId", "Guid"]],
        bodyProperties: [],
      },
      {
        id: 3,
        name: "Get Ingredients From Recipe",
        method: "GET",
        url: "api/Recipe/getIngredientsFromRecipe",
        params: [["recipeName", "string"]],
        bodyProperties: [],
      },
      {
        id: 4,
        name: "Create",
        method: "POST",
        url: "api/Recipe/create",
        params: [],
        bodyProperties: [["name", "string"]],
      },
      {
        id: 5,
        name: "Update",
        method: "POST",
        url: "api/Recipe/update",
        params: [["recipeId", "Guid"]],
        bodyProperties: [["name", "string"]],
      },
      {
        id: 6,
        name: "Delete",
        method: "POST",
        url: "api/Recipe/delete",
        params: [["recipeId", "Guid"]],
        bodyProperties: [],
      }
    ],
  },
  {
    id: 6,
    name: "User",
    actions: [
      {
        id: 1,
        name: "Get Users",
        method: "GET",
        url: "api/User/getUsers",
        bodyProperties: [],
        params: [],
      },
      {
        id: 2,
        name: "Get User",
        method: "GET",
        url: "api/User/getUser",
        params: [["userId", "Guid"]],
        bodyProperties: [],
      },
      {
        id: 3,
        name: "Update",
        method: "POST",
        url: "api/User/update",
        params: [["userId", "Guid"]],
        bodyProperties: [
          ["password", "string"],
          ["email", "string"],
          ["firstName", "string?"],
          ["lastName", "string?"]
        ],
      },
      {
        id: 4,
        name: "Delete",
        method: "POST",
        url: "api/User/delete",
        params: [["userId", "Guid"]],
        bodyProperties: [],
      }
    ],
  },
  {
    id: 7,
    name: "Ingredient",
    actions: [
      {
        id: 1,
        name: "Get Ingredients",
        method: "GET",
        url: "api/Ingredient/getIngredients",
        bodyProperties: [],
        params: [],
      },
      {
        id: 2,
        name: "Get Ingredient",
        method: "GET",
        url: "api/Ingredient/getIngredient",
        params: [["ingredientId", "Guid"]],
        bodyProperties: [],
      },
      {
        id: 3,
        name: "Get Recipes Containing Ingredient",
        method: "GET",
        url: "api/Ingredient/GetRecipesContainingIngredient",
        params: [["ingredientName", "string"]],
        bodyProperties: [],
      },
      {
        id: 4,
        name: "Create",
        method: "POST",
        url: "api/Ingredient/create",
        params: [],
        bodyProperties: [["name", "string"]],
      },
      {
        id: 5,
        name: "Update",
        method: "POST",
        url: "api/Ingredient/update",
        params: [["ingredientId", "Guid"]],
        bodyProperties: [["name", "string"]],
      },
      {
        id: 6,
        name: "Delete",
        method: "POST",
        url: "api/Ingredient/delete",
        params: [["ingredientId", "Guid"]],
        bodyProperties: [],
      }
    ],
  },
  {
    id: 8,
    name: "RecipeIngredient",
    actions: [
      {
        id: 1,
        name: "Get Recipe Ingredients",
        method: "GET",
        url: "api/RecipeIngredient/getRecipeIngredients",
        bodyProperties: [],
        params: [],
      },
      {
        id: 2,
        name: "Create",
        method: "POST",
        url: "api/RecipeIngredient/create",
        params: [],
        bodyProperties: [
          ["quantity", "int"],
          ["recipeId", "Guid"],
          ["ingredientId", "Guid"]
        ],
      }
    ],
  }
]

export const columnsExample = [
  {
    id: 1,
    name: "Column1"
  },
  {
    id: 2,
    name: "Column2"
  },
  {
    id: 3,
    name: "Column3"
  },
  {
    id: 4,
    name: "Column4"
  },
  {
    id: 5,
    name: "Column5"
  },
  {
    id: 6,
    name: "Column6"
  },
]

export const rowsExample = [
  {
    id: 1,
    data: [
      {
        id: 1,
        data: "data1"
      },
      {
        id: 2,
        data: "data2"
      },
      {
        id: 3,
        data: "data3"
      },
      {
        id: 4,
        data: "data4"
      },
      {
        id: 5,
        data: "data5"
      },
      {
        id: 6,
        data: "data6"
      }
    ]
  },
  {
    id: 2,
    data: [
      {
        id: 1,
        data: "data1"
      },
      {
        id: 2,
        data: "data2"
      },
      {
        id: 3,
        data: "data3"
      },
      {
        id: 4,
        data: "data4"
      },
      {
        id: 5,
        data: "data5"
      },
      {
        id: 6,
        data: "data6"
      }
    ]
  },
  {
    id: 3,
    data: [
      {
        id: 1,
        data: "data1"
      },
      {
        id: 2,
        data: "data2"
      },
      {
        id: 3,
        data: "data3"
      },
      {
        id: 4,
        data: "data4"
      },
      {
        id: 5,
        data: "data5"
      },
      {
        id: 6,
        data: "data6"
      }
    ]
  },
  {
    id: 4,
    data: [
      {
        id: 1,
        data: "data1"
      },
      {
        id: 2,
        data: "data2"
      },
      {
        id: 3,
        data: "data3"
      },
      {
        id: 4,
        data: "data4"
      },
      {
        id: 5,
        data: "data5"
      },
      {
        id: 6,
        data: "data6"
      }
    ]
  },
  {
    id: 5,
    data: [
      {
        id: 1,
        data: "data1"
      },
      {
        id: 2,
        data: "data2"
      },
      {
        id: 3,
        data: "data3"
      },
      {
        id: 4,
        data: "data4"
      },
      {
        id: 5,
        data: "data5"
      },
      {
        id: 6,
        data: "data6"
      }
    ]
  },
];

export const inputsExample = [
  {
    id: 1,
    data: {
      name: "input1",
      type: "text",
      placeholder: "placeholder1"
    }
  },
  {
    id: 2,
    data: {
      name: "input2",
      type: "text",
      placeholder: "placeholder2"
    }
  },
  {
    id: 3,
    data: {
      name: "input3",
      type: "text",
      placeholder: "placeholder3"
    }
  },
  {
    id: 4,
    data: {
      name: "input4",
      type: "text",
      placeholder: "placeholder4"
    }
  },
]