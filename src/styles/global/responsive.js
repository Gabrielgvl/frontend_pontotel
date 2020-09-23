import { css } from 'styled-components';

import { phablet, tablet } from '../queries';

export default css`
  .d-none-mobile {
    display: none !important;
  }
  ${phablet} {
    .d-none-mobile {
      display: inline-flex !important;
    }
  }

  .d-none-sm {
    display: none !important;
  }
  ${tablet} {
    .d-none-sm {
      display: inline-flex !important;
    }
  }

  .d-none-md {
    display: inline-flex !important;
  }
  ${phablet} {
    .d-none-md {
      display: none !important;
    }
  }

  /* width */
  .w-100 {
    width: 100%;
  }

  .overflow-text {
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
  }

  .overflow-text-90 {
    width: 90%;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
  }

  /* margin top */
  .mt-0 {
    margin-top: 0px !important;
  }
  .mt-1 {
    margin-top: 4px !important;
  }
  .mt-2 {
    margin-top: 8px !important;
  }
  .mt-3 {
    margin-top: 16px !important;
  }
  .mt-4 {
    margin-top: 32px !important;
  }
  /* margin bottom */
  .mb-0 {
    margin-bottom: 0px !important;
  }
  .mb-1 {
    margin-bottom: 4px !important;
  }
  .mb-2 {
    margin-bottom: 8px !important;
  }
  .mb-3 {
    margin-bottom: 16px !important;
  }
  .mb-4 {
    margin-bottom: 32px !important;
  }
  /* margin left */
  .ml-0 {
    margin-left: 0px !important;
  }
  .ml-1 {
    margin-left: 4px !important;
  }
  .ml-2 {
    margin-left: 8px !important;
  }
  .ml-3 {
    margin-left: 16px !important;
  }
  .ml-4 {
    margin-left: 32px !important;
  }
  /* margin right */
  .mr-0 {
    margin-right: 0px !important;
  }
  .mr-1 {
    margin-right: 4px !important;
  }
  .mr-2 {
    margin-right: 8px !important;
  }
  .mr-3 {
    margin-right: 16px !important;
  }
  .mr-4 {
    margin-right: 32px !important;
  }

  /* padding x */
  .px-0 {
    padding: 0px !important;
  }
  .px-1 {
    padding: 0 4px !important;
  }
  .px-2 {
    padding: 0 8px !important;
  }
  .px-3 {
    padding: 0 16px !important;
  }
  .px-4 {
    padding: 0 32px !important;
  }
  /* padding y */
  .py-0 {
    padding: 0px !important;
  }
  .py-1 {
    padding: 4px 0 !important;
  }
  .py-2 {
    padding: 8px 0 !important;
  }
  .py-3 {
    padding: 16px 0 !important;
  }
  .py-4 {
    padding: 32px 0 !important;
  }
  /* padding left */
  .pl-0 {
    padding-left: 0px !important;
  }
  .pl-1 {
    padding-left: 4px !important;
  }
  .pl-2 {
    padding-left: 8px !important;
  }
  .pl-3 {
    padding-left: 16px !important;
  }
  .pl-4 {
    padding-left: 32px !important;
  }

  /* padding right */
  .pr-0 {
    padding-right: 0px !important;
  }
  .pr-1 {
    padding-right: 4px !important;
  }
  .pr-2 {
    padding-right: 8px !important;
  }
  .pr-3 {
    padding-right: 16px !important;
  }
  .pr-4 {
    padding-right: 32px !important;
  }
`;
