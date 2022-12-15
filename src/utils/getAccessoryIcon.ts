import GasolineSvg from '../assets/gasoline.svg'
import AccelerationSvg from '../assets/acceleration.svg'
import ForceSvg from '../assets/force.svg'
import PeopleSvg from '../assets/people.svg'
import SpeedSvg from '../assets/speed.svg'
import ExchangeSvg from '../assets/exchange.svg'
import EnergySvg from '../assets/energy.svg'
import HybridSvg from '../assets/hybrid.svg'
import LogoSvg from '../assets/logo.svg'

export function getAccessoryIcon(type: string) {
    const icons = {
        speed: SpeedSvg,
        acceleration: AccelerationSvg,
        turning_diameter: ForceSvg,
        gasoline_motor: GasolineSvg,
        hybrid_motor: HybridSvg,
        exchange: ExchangeSvg,
        seats: PeopleSvg,
        electric_motor: EnergySvg,
        electric: EnergySvg,
    }
    try {
        if(icons[type] === undefined){
            throw new Error()
        }
        const seletectedIcon = icons[type]
        return seletectedIcon
    } catch {
        return LogoSvg
    }
}