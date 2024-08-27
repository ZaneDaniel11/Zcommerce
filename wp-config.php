<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'store_db' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'ycg`~aaHu}/x]@m&Y>o^voh&:5$dfjb0E8m ms^oEnK8>zE%7h<9GB/ Cw[UNtt;' );
define( 'SECURE_AUTH_KEY',  'sr$DW8`!k!=2~282i;kO=^ZA/1!L70b_wg>4w,rEFKD9eCg!X4tvG&mfofSycEu>' );
define( 'LOGGED_IN_KEY',    '!R2MYapjid]i7mH$=2sz[jp255Do75!uKI3o%S}kd1dldocxtTnY}_lE<6z5/&)Z' );
define( 'NONCE_KEY',        'Y(jPX3r _-]OpHu;$0a;OOA1TEy;RJ,>qDjS|/r^Ii{<a^3T*T.L hyLW7h,&c4?' );
define( 'AUTH_SALT',        'O8.&2q: a)z|7h6%:EeF]h}h|TunV#4nHnvPA2/COB3K3p,eH*5[AIIUjD=D.cWw' );
define( 'SECURE_AUTH_SALT', 'b!t0esYm)C=-}s);lu>K7EeRc@Pa1npMh-Z q&.F$.+vX%vOn6M,~)X::_;<C(2/' );
define( 'LOGGED_IN_SALT',   'AcF,h50KO6]5+f$)[@W2he6f599?!$n8]$?Tgjpa~4c^> :5y;BNakYkl-Ab+9(0' );
define( 'NONCE_SALT',       'ahV/CK;01]y)+UHi.oiPw`rl=NvaV;B)(*mc>8]*+HlXH!gIgfi.sc6@as? (n?z' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
