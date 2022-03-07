const { Fintoc } = require('fintoc')
require('dotenv').config()
//GetUserAll
async function getUserAll() {
  
  const fintocClient = new Fintoc(process.env.SECRETKEY)
  const link = await fintocClient.links.get(process.env.LINK_TOKEN)
  const accounts = await link.accounts.all();

  accountArray = []

      for await(const account of accounts){
          accountArray.push({
              account_id : account.id,
              account_name: account.holder_name,
              type: account.type,
              number: account.number,
              name:account.name,
              totalavailibe:account.balance.available,
              totalcurrent:account.balance.current,
              limit:account.balance.limit,
            })
      }
  return  accountArray
}
const getUserAccouns = async (req,res,next) => {

  async function Accounts(){
    const resAcc = await getUserAll()
    return resAcc
  }

const userAccount = await Accounts()
res.render("estado", {accounts:userAccount})                                    
}

//FIND BY ID BANCOESTADO

const getUserAccountById =  async (req,res,next) => {
  async function getUserByid() {
    const fintocClient = new Fintoc(process.env.SECRETKEY)
    const link = await fintocClient.links.get(process.env.LINK_TOKEN)
    const id = (req.params.id)
    console.log(id)
    const accounts = await link.accounts.get(id);
    account = []
    //INSERT OBJECT FOR ACCOUNTS[]
    account.push({
      account_id : accounts.id,
      account_name: accounts.holder_name,
      type: accounts.type,
      number: accounts.number,
      name:accounts.name,
      totalavailibe:accounts.balance.available,
      totalcurrent:accounts.balance.current,
      limit:accounts.balance.limit,
    })
    return  account
                // console.log(cuentas)
  }
    async function myAccount(){
      const resAcc = await getUserByid()
      return resAcc
    }
  const userAccount = await myAccount()
  res.json(userAccount)
                                    
  }
  

  //GetUserALLBCI
  async function getUserAllBCI() {
    const fintocClient = new Fintoc(process.env.SECRETKEY)
    const link = await fintocClient.links.get(process.env.LINK_TOKENBCI)
    const accounts = await link.accounts.all();
    accountArray = []
        for await(const account of accounts){
            accountArray.push({
                account_id : account.id,
                account_name: account.holder_name,
                type: account.type,
                number: account.number,
                name:account.name,
                totalavailibe:account.balance.available,
                totalcurrent:account.balance.current,
                limit:account.balance.limit,
              })
        }
    return  accountArray

  }
  
  const getUserAccountAllBCI = async (req,res,next)=>{
    async function AccountsBci(){
      const resAccount = await getUserAllBCI()
      return resAccount
 
    }
  const returnAccountBCI = await AccountsBci()
  res.render( "bci", {accounts:returnAccountBCI})

  }

//Exports
  module.exports = {getUserAccountById, getUserAccouns, getUserAccountAllBCI}