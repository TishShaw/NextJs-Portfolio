import createSchema from 'part:@sanity/base/schema-creator';

import schemaTypes from 'all:part:@sanity/base/schema-type';

import portfolio from './portfolio';
import project from './project';
import skill from './skill';
import social from './social';

export default createSchema({
	name: 'default',
	types: schemaTypes.concat([portfolio, project, skill, social]),
});
