<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       http://example.com
 * @since      1.0.0
 *
 * @package    Quoty
 * @subpackage Quoty/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Quoty
 * @subpackage Quoty/admin
 * @author     TNT Studio <info@tntstudio.hr>
 */
class Quoty_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $quoty    The ID of this plugin.
	 */
	private $quoty;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $quoty       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $quoty, $version ) {

		$this->quoty = $quoty;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		wp_enqueue_style( $this->quoty, plugin_dir_url( __FILE__ ) . 'css/quoty-admin.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		wp_enqueue_script( $this->quoty, plugin_dir_url( __FILE__ ) . 'js/quoty-admin.js', array( 'jquery' ), $this->version, false );

	}

	/**
	 * Register the Settings page.
	 *
	 * @since    1.0.0
	 */
	public function quoty_admin_menu() {

		 add_options_page( __('Quoty Settings', $this->quoty), __('Quoty Settings', $this->quoty), 'manage_options', $this->quoty, array($this, 'display_plugin_admin_page'));

	}

	/**
	 * Callback function for the admin settings page.
	 *
	 * @since    1.0.0
	 */
	public function display_plugin_admin_page(){

		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/partials/quoty-admin-display.php';

	}

	/**
	 * Plugin Settings Link on plugin page
	 *
	 * @since 		1.0.0
	 * @return 		mixed 			The settings field
	 */
	function add_settings_link( $links ) {

		$mylinks = array(
			'<a href="' . admin_url( 'options-general.php?page=quoty' ) . '">Settings</a>',
		);
		return array_merge( $links, $mylinks );
	}

	/**
	 * Creates our settings sections with fields etc.
	 *
	 * @since    1.0.0
	 */
	public function settings_api_init() {

	}
}
