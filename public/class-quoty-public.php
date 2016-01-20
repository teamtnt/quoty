<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       http://example.com
 * @since      1.0.0
 *
 * @package    Quoty
 * @subpackage Quoty/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Quoty
 * @subpackage Quoty/public
 * @author     TNT Studio <info@tntstudio.hr>
 */
class Quoty_Public {

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
	 * @param      string    $quoty       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $quoty, $version ) {

		$this->quoty = $quoty;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Quoty_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Quoty_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */
		wp_enqueue_style( $this->quoty, plugin_dir_url( __FILE__ ) . 'css/quoty-public.css', array(), $this->version, 'all' );
		wp_register_style('font-awesome', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css');
		wp_enqueue_style('font-awesome');
	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Quoty_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Quoty_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script( 'react', plugin_dir_url( __FILE__ ) . 'js/dist/react.min.js', array(), $this->version, true );
		wp_enqueue_script( 'react-dom', plugin_dir_url( __FILE__ ) . 'js/dist/react-dom.min.js', array('react'), $this->version, true );
		wp_enqueue_script( $this->quoty, plugin_dir_url( __FILE__ ) . 'js/dist/quoty-public.js', array( 'jquery','react', 'react-dom' ), $this->version, true );

	}

	public function display() {
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/partials/quoty-public-display.php';
	}

}
