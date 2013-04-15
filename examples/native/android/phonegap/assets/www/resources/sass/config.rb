# Get the directory that this configuration file exists in
dir = File.dirname(__FILE__)

# Load the sencha-touch framework automatically.
load File.join(dir, '..', '..', 'touch', 'resources', 'themes')

# Load the sencha-tux components style automatically.
load File.join(dir, '../../../../../../../../tux', 'resources', 'themes')

# Compass configurations
sass_path = dir
css_path = File.join(dir, "..", "css")

# Require any additional compass plugins here.
images_dir = File.join("../../../../../../../../","tux","images")
fonts_path = File.join(dir, '../../../../../../../../touch/resources/themes/fonts/')
output_style = :compressed
environment = :production
