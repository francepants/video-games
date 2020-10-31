// sync
export const updateSignupForm = (formData) => {
    // console.log(formData)
    return {
        type: "UPDATE_SIGNUP_FORM",
        formData
    }
}

export const resetSignupForm = () => {
    return {
        type: "RESET_SIGNUP_FORM"
    }
}


// doesn't need async action creators because it's just controlling itself and changes to itself