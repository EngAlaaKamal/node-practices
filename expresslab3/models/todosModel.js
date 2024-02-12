// validators.js

const validateTodoInput = (req, res, next) => {
    const { text } = req.body;
    if (!text || !(text.trim()) ) {
      return res.status(400).json({ error: 'Text is required for the todo' });
    }
    next();
  };
  
  const validateTodoId = (req, res, next) => {
    const id = parseInt(req.params.id ,10);
    if (isNaN(id) || id <= 0) {
      return res.status(400).json({ error: 'Invalid todo ID' });
    }
    next();
  };
  
  module.exports = {


    validateTodoInput,
    validateTodoId
  };
  