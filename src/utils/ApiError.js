class ApiError extends Error{
    constructor(statuscode, errors=[], stack="", message="something went wrong"){
        super(message)
        this.statuscode=statuscode
        this.data=null,
        this.message=message
        this.success=false
        this.errors=errors
    }
}