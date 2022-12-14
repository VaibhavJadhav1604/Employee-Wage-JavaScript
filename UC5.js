const IS_FULL_TIME = 2;
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const WAGE_PER_HR = 20;
const FULL_DAY_HOURS = 8;
const PART_TIME_HOURS = 4;
const WORKING_DAY_PER_MONTH = 20;

let monthlyEmpWage = 0;
let empWage =0;
for(let i = 1; i <= WORKING_DAY_PER_MONTH;i++)
{
    empWage = WAGE_PER_HR * GetWorkingHrs();
    monthlyEmpWage += empWage;
}
console.log("Employee wage for this month is "+ monthlyEmpWage);

function GetWorkingHrs()
{
    let empCheck;
    empCheck = Math.floor(Math.random() * 10) % 3;
    switch(empCheck){
        case IS_ABSENT:
            return 0;
            break;
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            return FULL_DAY_HOURS;
            break;
    }
}