const {check, validationResult} = require ('express-validator');

const generateAdoptionValidator = () => [
check('user_id').notEmpty().isNumeric().withMessage("Invalid user_id"),
check('pet_id').notEmpty().isNumeric().withMessage("Invalid pet_id"),
check('date').notEmpty().isDate(["YYY / MM / DD"]).withMessage("Invalid DATE")
]

const generateIdValidator = () => [
    check('id').notEmpty().isNumeric().withMessage("Invalid id")
]

const generateUserIdValidator = () => [
    check('user_id').notEmpty().isNumeric().withMessage("Invalid user_id")
]

const UpdateAdoptionValidator = () => [
check('id').notEmpty().isNumeric().withMessage('Invalid id'),
check('user_id').notEmpty().isNumeric().withMessage("Invalid user_id"),
check('pet_id').notEmpty().isNumeric().withMessage("Invalid pet_id"),
check('date').notEmpty().isDate(["YYY / MM / DD"]).withMessage("Invalid DATE")
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
        generateAdoptionValidator(),
        reporter
    ],
    id:
    [
        generateIdValidator(),
        reporter

    ],

    update:
    [
        UpdateAdoptionValidator(),
        reporter
    ],
    userid: [
        generateUserIdValidator(),
        reporter
    ]
};

