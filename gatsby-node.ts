/**
 * Code in the gatsby-node.ts is run once in the process of building your site.
 * We can use its APIs to create pages dynamically, add data into GraphQL, or respond to events during the build lifecycle.
 * @see https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#onCreateWebpackConfig
 */

import packageJson from './package.json';

import type { GatsbyNode, PackageJson } from 'gatsby';

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
	actions,
	plugins,
}) => {
	actions.setWebpackConfig({
		resolve: {
			plugins: [
				plugins.define({
					__NAME__: JSON.stringify(packageJson.name),
					__VERSION__: JSON.stringify(packageJson.version),
					__DESC__: JSON.stringify(packageJson.description),
				}),
			],
		},
	});
};
