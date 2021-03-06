export default [
	{
		id: 'entity_tag',
		includes: 'tags/',
		file_viewer: 'json',

		start_state: 'tag/main',
		lightning_cache: 'tag',
		highlighter: 'entity',
		file_creator: 'tag',
		snippets: 'entity',
	},
	{
		id: 'bridge_map_area',
		includes: 'map_areas/',
		file_viewer: 'json',

		start_state: 'map_area/main',
		highlighter: 'map_area',
		file_creator: 'map_area',
	},
	{
		id: 'custom_component',
		includes: 'components/',
		file_viewer: 'text',

		file_creator: 'custom_component',
	},
	{
		id: 'custom_command',
		includes: 'commands/',
		file_viewer: 'text',

		file_creator: 'custom_command',
	},
]
