import program from 'commander'
import { CommanderStatic } from 'commander'

type Register = (register: CommanderStatic) => void

export interface CommanderStaticExt extends CommanderStatic {
  addCommand: (this: CommanderStatic, register: Register) => CommanderStatic
}

program.addCommand = function(this: CommanderStatic, register: Register): CommanderStatic {
  register(this)
  return program
}

export default program as CommanderStaticExt
