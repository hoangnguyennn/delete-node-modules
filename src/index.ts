import yargs, { Argv } from 'yargs'
import run, { ArgvOptions } from './run'

type ArgvType = Awaited<Argv<ArgvOptions>['argv']>

export default () => {
  const argv = yargs.config('config').usage('$0 <source>').argv as unknown as ArgvType

  run(argv)
}
