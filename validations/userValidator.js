const {check, validationResult} = require ('express-validator');

const generateUserValidator = () => [
check('name').notEmpty().isLength({max: 50}).withMessage("Invalid name"),
check('lastname').notEmpty().isLength({max: 50}).withMessage("Invalid lastname"),
check('phone').notEmpty().isLength({min: 10, max: 10}).isNumeric().withMessage("Invalid phone (10 numbers)"),
check('address').notEmpty().isLength({max: 150}).withMessage("Invalid address")]

const generateIdValidator = () => [
    check('id').notEmpty().isNumeric().withMessage('Invalid id')
]

const UpdateUserValidator = () => [
check('id').notEmpty().isNumeric().withMessage('Invalid id'),
check('name').isLength({max: 50}).withMessage("Invalid name"),
check('lastname').isLength({max: 50}).withMessage("Invalid lastname"),
check('phone').isLength({min: 10, max: 10}).isNumeric().withMessage("Invalid phone (10 numbers)"),
check('address').isLength({max: 150}).withMessage("Invalid address")
]


const reporter = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(404).json({
            "succes" : false,
            "code" : 404,
            "message" : errors,
            "date" : []
        })
    }
    next();
}

module.exports = {
    add: [
        generateUserValidator(),
        reporter
    ],
    id:
    [
        generateIdValidator(),
        reporter

    ],

    update:
    [
        UpdateUserValidator(),
        reporter

    ]
};