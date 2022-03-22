const {check, validationResult} = require ('express-validator');

const generatePetValidator = () => [
check('alias').notEmpty().isLength({max: 150}).withMessage("Invalid alias"),
check('type').isInt('DOG', 'CAT'),
check('color').notEmpty().isLength({mam: 20}).withMessage("Invalid color"),
check('notes').notEmpty().isLength({max: 900}).withMessage("Invalid address")]

const generateIdValidator = () => [
    check('id').notEmpty().isNumeric().withMessage('Invalid id')
]

const UpdatePetValidator = () => [
check('id').notEmpty().isNumeric().withMessage('Invalid id'),
check('alias').isLength({max: 50}).withMessage("Invalid alias"),
check('type').isInt('DOG', 'CAT'),
check('color').notEmpty().isLength({mam: 20}).withMessage("Invalid color"),
check('notes').notEmpty().isLength({max: 900}).withMessage("Invalid address")
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
        generatePetValidator(),
        reporter
    ],
    id:
    [
        generateIdValidator(),
        reporter

    ],

    update:
    [
        UpdatePetValidator(),
        reporter

    ]
};