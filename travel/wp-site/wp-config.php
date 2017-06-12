<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wp-travel');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'sS0_~Zf^XWWfN{TGw)k@tV]_kL?x.]NKeUs-f{Wj=9v&*g2@pw]?p(wonbnjlD|A');
define('SECURE_AUTH_KEY',  'z!kak5iamy(yw2ZN&[[np>^FU G3G8XQp/>L^&Ma<UM^%`5vghS{},W*BfA#u]q~');
define('LOGGED_IN_KEY',    '~1w9lUv8pM[NOUw}6u$ |(u _&1Z1t.zn]dF^bY}!9?YM&G}.CA1#-ViZD)Esu7)');
define('NONCE_KEY',        'R@x_[qAkpsZbd8#G~lgoQaC@3E5<};5csz:bE/>3HYdZ#%4hFGv8_h]jUZ`d%#G#');
define('AUTH_SALT',        'FY$|$RgYwKsbfE=!Su!.Gy|G]2<{PYe,HGBLpx-*ghLrD<B#h]Lqdkdnx3Y:ocOL');
define('SECURE_AUTH_SALT', 'KC^|adyPl1{>U0 h=7Nw+jfu]n$4tAI={d=^]saROM{Z;?PmGJtY!O4H4=cYR3T$');
define('LOGGED_IN_SALT',   'gmlTlr!XX0_nhRa%n056bi^;+1??9?`Oz]BPQPgMsEFEIY+WX(L{G*zFod:$Vf+(');
define('NONCE_SALT',       'Dq8RWWPg,XNI;3R{ ~}uc>UiGNwhf)A2},wv5W-hxvH9Gy~&D+ej-v[g$7wn.e^C');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'tv_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
