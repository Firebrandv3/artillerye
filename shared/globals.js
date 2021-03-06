/**
 * Artillerye
 *
 * Copyright (c) 2014 Petar Petrov
 *
 * This work is licensed under a Creative Commons Attribution-NoDerivatives 4.0 International License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nd/4.0/.
 */

'use strict';

var Globals = {

  /**
   * Global constants
   */

  // Gfx & UI

  SCREEN_WIDTH: 960,
  SCREEN_HEIGHT: 640,
  HUD_POWER_BUTTON_RADIUS: 40,
  HUD_SHOOT_BUTTON_RADIUS: 22,
  HUD_MOVE_BUTTON_RADIUS: 20,

  WIDTH_BULLET: 16,
  HEIGHT_BULLET: 10,
  WIDTH_GROUND: 64,
  WIDTH_BLOCK: 32,
  WIDTH_PLAYER: 45,
  HEIGHT_PLAYER: 28,
  TILE_SIZE: 64,

  MAX_PARTICLES: 20,

  // Gameplay

  MAX_GAMES: 50,
  MAX_CLIENTS: 3,
  MAX_NAME_SIZE: 9,

  TOUCH_DELAY: 250,

  MAX_BULLET_SPEED: 450,
  MAX_BULLETS: 20,
  MAX_HP_PLAYER: 100,

  WEIGHT_GROUND: 200,
  WEIGHT_PLAYER: 80,
  WEIGHT_BULLET: 10,
  WEIGHT_BLOCK: 90,

  /**
   * Misc
   */

  PING_TIMEOUT: 3125,
  MAX_CHAT_MESSAGES: 7,
  MAX_CHAT_MSG_SIZE: 70,

  /**
   * Debugging
   */

  enableDebug: true,

  debug: function() {
    if (this.enableDebug) {
      var args = Array.prototype.slice.call(arguments, 0);
      console.log(args);
    }
  },

  error: function() {
    if (this.enableDebug) {
      var args = Array.prototype.slice.call(arguments, 0);
      console.error(args);
    }
  },

  /**
   * Collisions masks
   */

  masks: {
    DEFAULT:    1,
    WALL:       2,
    WALL_LEFT:  4,
    WALL_RIGHT: 8,
    GROUND:     16,
    BLOCK:      32,
    PLAYER:     64,
    BULLET:     128
  },

  /**
   * Math constants
   */

  math: {
    PI:     3.14159265358979,
    PI2:    6.28318530716,
    PI_2:   1.5707963267948966,
    PI_4:   0.3926990817,
    PI3_2:  4.71238898037
  }

};

module.exports = Globals;
