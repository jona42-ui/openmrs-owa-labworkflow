/* * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header, setLocaleMessages, withLocalisation } from '@openmrs/react-components';
import BreadCrumb from './components/shared/BreadCrumb/BreadCrumb';
import LabResultEntry from './components/LabResultEntry/LabResultEntry';

import messagesEN from "./translations/en.json";
import messagesFR from "./translations/fr.json";
import App from './components/App';

setLocaleMessages({
  en: messagesEN,
  fr: messagesFR,
});

// Demo component as placeholder for fake breadcrumb page
const FakeBreadcrumbPage = () => (
  <div>FakeBreadcrumbPage</div>
);

const LocalizedBreadCrumb = withLocalisation(BreadCrumb);

// eslint-disable-next-line
export default store => (
  <div>
    <Header />
    <LocalizedBreadCrumb />
    <Switch>
      <Route exact path="/" component={withLocalisation(App)} />
      <Route exact path="/FakeBreadcrumbPage" component={withLocalisation(FakeBreadcrumbPage)} />
      <Route path="/LabResultEntry" component={LabResultEntry} />
    </Switch>
  </div>
);