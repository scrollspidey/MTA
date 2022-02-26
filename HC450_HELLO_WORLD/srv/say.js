module.exports = class srv {   
    hello(req) 
        { 
            return `Hello ${req.data.to}! This is your first Node.js` 
        } 
} 