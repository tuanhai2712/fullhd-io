import user from './user';
import trading from './trading'
import matrix from './matrix'
import aiRobot from './ai'
import wallet from './wallet'
import serverError from './serverError'
import requestSuccess from './requestSuccess'
import tfa from './tfa'
import fetching from './fetching'
import commission from './commission'
import profile from './profile'

const rootState: globalState = {
  ...user, ...trading, ...matrix, ...wallet, ...aiRobot, ...serverError, ...requestSuccess, ...tfa, ...fetching, ...commission, ...profile
}
export default rootState;
