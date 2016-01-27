<?php

/**
 * Admin Part of Plugin, dashboard and options.
 *
 * @package    quoty
 * @subpackage quoty/admin
 */
class Quoty_Settings extends Quoty_Admin {

    /**
     * The ID of this plugin.
     *
     * @since    1.0.0 
     * @access   private
     * @var      string    $quoty    The ID of this plugin.
     */
    private $quoty;

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     * @var      string    $quoty       The name of this plugin.
     * @var      string    $version    The version of this plugin.
     */
    public function __construct( $quoty ) {
        $this->quoty = $quoty;
    }

    /**
     * Creates our settings sections with fields etc. 
     *
     * @since    1.0.0
     */
    public function settings_api_init(){

        // register_setting( $option_group, $option_name, $settings_sanitize_callback );
        register_setting(
            $this->quoty . '_options',
            $this->quoty . '_options',
            array( $this, 'settings_sanitize' )
        );

        // add_settings_section( $id, $title, $callback, $menu_slug );
        add_settings_section(
            $this->quoty . '-display-options', // section
            apply_filters( $this->quoty . '-display-section-title', __( '', $this->quoty ) ),
            array( $this, 'display_options_section' ),
            $this->quoty
        );

        add_settings_field(
            'social-platforms',
            apply_filters( $this->quoty . '-social-platforms-label', __( 'Social platforms', $this->quoty ) ),
            array( $this, 'social_platforms' ),
            $this->quoty,
            $this->quoty . '-display-options' // section to add to
        );

        add_settings_field(
            'css-selector',
            apply_filters( $this->quoty . '-css-selector-label', __( 'CSS Selector', $this->quoty ) ),
            array( $this, 'css_selector' ),
            $this->quoty,
            $this->quoty . '-display-options'
        );
    }

    /**
     * Creates a settings section
     *
     * @since       1.0.0
     * @param       array       $params         Array of parameters for the section
     * @return      mixed                       The settings section
     */
    public function display_options_section( $params ) {

        echo '<p>' . $params['title'] . '</p>';

    }
    
    public function css_selector() {

        $options    = get_option( $this->quoty . '_options' );
        $option     = '';

        if ( ! empty( $options['css-selector'] ) ) {
            $option = $options['css-selector'];
        }

        ?>
        <input type="text" id="<?php echo $this->quoty; ?>_options[css-selector]" name="<?php echo $this->quoty; ?>_options[css-selector]" value="<?php echo esc_attr( $option ); ?>" placeholder=".entry-content p">
        <p class="description">Make Quoty available only inside a particular element</p> 
        <?php
    }

    public function social_platforms() {

        $options    = get_option( $this->quoty . '_options' );
        $option     = array();

        if ( ! empty( $options['social-platforms'] ) ) {
            $option = $options['social-platforms'];
        }

    ?>
            <p>
                <input type="checkbox" id="<?php echo $this->quoty; ?>_options[social-platforms]" name="<?php echo $this->quoty; ?>_options[social-platforms][]" value="facebook" <?php checked( in_array( "facebook", $option ) ); ?> />
                Facebook
            </p>
            <p>
                <input type="checkbox" id="<?php echo $this->quoty; ?>_options[social-platforms]" name="<?php echo $this->quoty; ?>_options[social-platforms][]" value="twitter" <?php checked( in_array( "twitter", $option ) ); ?> />
                Twitter  
            </p>
            <p>
                <input type="checkbox" id="<?php echo $this->quoty; ?>_options[social-platforms]" name="<?php echo $this->quoty; ?>_options[social-platforms][]" value="googleplus" <?php checked( in_array( "googleplus", $option ) ); ?> />
                Google+      
            </p>
            <p>
                <input type="checkbox" id="<?php echo $this->quoty; ?>_options[social-platforms]" name="<?php echo $this->quoty; ?>_options[social-platforms][]" value="pinterest" <?php checked( in_array( "pinterest", $option ) ); ?> />
                Pinterest
            </p>
            <p>
                <input type="checkbox" id="<?php echo $this->quoty; ?>_options[social-platforms]" name="<?php echo $this->quoty; ?>_options[social-platforms][]" value="linkedin" <?php checked( in_array( "linkedin", $option ) ); ?> />
                LinkedIn
            </p>
            <p class="description">Select the social platforms you want to be inside the popup</p>
    <?php 
    }

    public function settings_sanitize( $input ) {
        // Initialize the new array that will hold the sanitize values
        $new_input = array();

        if(isset($input)) {
            // Loop through the input and sanitize each of the values
            foreach ( $input as $key => $val ) {

                if(is_array($val)) { // dont sanitize array
                    $new_input[ $key ] = $val;
                } else {
                    $new_input[ $key ] = sanitize_text_field( $val );
                }
                
            }

        }

        return $new_input;

    } // sanitize()
}
