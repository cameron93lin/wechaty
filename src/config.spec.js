import { test }   from 'ava'
import { Config } from './config'

test('Config list vars & methods', t => {
  t.truthy(Config.default   , 'should export default')
  t.truthy(Config.Config    , 'should export Config')

  t.true('isDocker' in Config, 'should identify docker env by `isDocker`')
  t.true('head'     in Config, 'should exist `head` in Config')
  t.true('puppet'   in Config, 'should exist `puppet` in Config')
  t.true('endpoint' in Config, 'should exist `endpoint` in Config')
  t.true('port'     in Config, 'should exist `port` in Config')
  t.true('profile'  in Config, 'should exist `profile` in Config')
  t.true('token'    in Config, 'should exist `token` in Config')

  t.truthy(Config.DEFAULT_PUPPET      , 'should export DEFAULT_PUPPET')
  t.truthy(Config.DEFAULT_PORT        , 'should export DEFAULT_PORT')
  t.truthy(Config.DEFAULT_PROFILE     , 'should export DEFAULT_PROFILE')
  t.truthy(Config.DEFAULT_HEAD        , 'should export DEFAULT_HEAD')
  t.truthy(Config.DEFAULT_PUPPET_PORT , 'should export DEFAULT_PUPPET_PORT')
  t.truthy(Config.DEFAULT_PROTOCOL    , 'should export DEFAULT_PROTOCOL')
  t.truthy(Config.ENDPOINT            , 'should export ENDPOINT')
  t.truthy(Config.BINARY_CHROMIUM     , 'should export BINARY_CHROMIUM')
})


