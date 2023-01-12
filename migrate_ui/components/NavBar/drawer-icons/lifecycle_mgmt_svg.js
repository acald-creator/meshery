import React from "react";
const Lifecycle = ({ fill, className, ...rest }) => (
  <svg
    width="22"
    height="19"
    viewBox="0 0 22 19"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...rest}
  >
    <path
      opacity="0.8"
      d="M17.6052 7.29033L17.3233 7.78193C17.2202 7.96414 17.0002 8.03977 16.8042 7.96757C16.3986 7.81631 16.0273 7.59973 15.7007 7.32815C15.5425 7.19751 15.5013 6.96718 15.6044 6.78841L15.8863 6.29681C15.6491 6.02179 15.4635 5.70207 15.3397 5.35486H14.7725C14.5662 5.35486 14.3874 5.20703 14.3531 5.00077C14.2843 4.58823 14.2809 4.15507 14.3531 3.72535C14.3874 3.51908 14.5662 3.36782 14.7725 3.36782H15.3397C15.4635 3.0206 15.6491 2.70089 15.8863 2.42587L15.6044 1.93426C15.5013 1.7555 15.5391 1.52517 15.7007 1.39453C16.0273 1.12295 16.402 0.906366 16.8042 0.755104C17.0002 0.68291 17.2202 0.758542 17.3233 0.940744L17.6052 1.43235C17.9662 1.36703 18.334 1.36703 18.695 1.43235L18.9769 0.940744C19.08 0.758542 19.3 0.68291 19.496 0.755104C19.9017 0.906366 20.2729 1.12295 20.5995 1.39453C20.7577 1.52517 20.7989 1.7555 20.6958 1.93426L20.4139 2.42587C20.6511 2.70089 20.8367 3.0206 20.9605 3.36782H21.5277C21.734 3.36782 21.9128 3.51564 21.9471 3.72191C22.0159 4.13445 22.0193 4.56761 21.9471 4.99733C21.9128 5.2036 21.734 5.35486 21.5277 5.35486H20.9605C20.8367 5.70207 20.6511 6.02179 20.4139 6.29681L20.6958 6.78841C20.7989 6.96718 20.7611 7.19751 20.5995 7.32815C20.2729 7.59973 19.8982 7.81631 19.496 7.96757C19.3 8.03977 19.08 7.96414 18.9769 7.78193L18.695 7.29033C18.3375 7.35565 17.9662 7.35565 17.6052 7.29033ZM17.2442 5.26891C18.5678 6.2865 20.077 4.77731 19.0594 3.45376C17.7359 2.43274 16.2267 3.94537 17.2442 5.26891ZM13.2805 10.5597L14.439 11.1372C14.7862 11.3366 14.9375 11.7594 14.8 12.1376C14.494 12.9695 13.8924 13.7327 13.3355 14.3997C13.0811 14.7056 12.6411 14.7813 12.2938 14.5819L11.2934 14.0043C10.7434 14.4753 10.104 14.85 9.4061 15.0941V16.2492C9.4061 16.648 9.12076 16.9918 8.72886 17.0605C7.88316 17.2049 6.99621 17.2118 6.11958 17.0605C5.72423 16.9918 5.43202 16.6514 5.43202 16.2492V15.0941C4.73415 14.8466 4.09472 14.4753 3.54468 14.0043L2.54428 14.5784C2.2005 14.7778 1.75703 14.7022 1.50263 14.3962C0.945713 13.7293 0.357852 12.9661 0.0518896 12.1376C-0.0856218 11.7629 0.0656407 11.34 0.412857 11.1372L1.55764 10.5597C1.42357 9.84117 1.42357 9.10204 1.55764 8.38011L0.412857 7.79912C0.0656407 7.59973 -0.0890596 7.17688 0.0518896 6.80217C0.357852 5.97022 0.945713 5.20703 1.50263 4.5401C1.75703 4.23414 2.19707 4.15851 2.54428 4.3579L3.54468 4.93545C4.09472 4.46447 4.73415 4.08975 5.43202 3.84567V2.68714C5.43202 2.29179 5.71392 1.94801 6.10583 1.87926C6.95152 1.73487 7.84191 1.728 8.71854 1.87582C9.11389 1.94458 9.4061 2.28492 9.4061 2.68714V3.84223C10.104 4.08975 10.7434 4.46104 11.2934 4.93201L12.2938 4.35446C12.6376 4.15507 13.0811 4.2307 13.3355 4.53667C13.8924 5.2036 14.4768 5.96678 14.7828 6.79873C14.9203 7.17345 14.7862 7.59629 14.439 7.79912L13.2805 8.37667C13.4146 9.09861 13.4146 9.83773 13.2805 10.5597ZM9.23765 11.285C11.2728 8.63794 8.251 5.61613 5.60391 7.6513C3.56874 10.2984 6.59056 13.3202 9.23765 11.285ZM17.6052 17.5659L17.3233 18.0575C17.2202 18.2397 17.0002 18.3153 16.8042 18.2431C16.3986 18.0918 16.0273 17.8753 15.7007 17.6037C15.5425 17.473 15.5013 17.2427 15.6044 17.064L15.8863 16.5723C15.6491 16.2973 15.4635 15.9776 15.3397 15.6304H14.7725C14.5662 15.6304 14.3874 15.4826 14.3531 15.2763C14.2843 14.8638 14.2809 14.4306 14.3531 14.0009C14.3874 13.7946 14.5662 13.6434 14.7725 13.6434H15.3397C15.4635 13.2961 15.6491 12.9764 15.8863 12.7014L15.6044 12.2098C15.5013 12.031 15.5391 11.8007 15.7007 11.6701C16.0273 11.3985 16.402 11.1819 16.8042 11.0306C17.0002 10.9584 17.2202 11.0341 17.3233 11.2163L17.6052 11.7079C17.9662 11.6426 18.334 11.6426 18.695 11.7079L18.9769 11.2163C19.08 11.0341 19.3 10.9584 19.496 11.0306C19.9017 11.1819 20.2729 11.3985 20.5995 11.6701C20.7577 11.8007 20.7989 12.031 20.6958 12.2098L20.4139 12.7014C20.6511 12.9764 20.8367 13.2961 20.9605 13.6434H21.5277C21.734 13.6434 21.9128 13.7912 21.9471 13.9974C22.0159 14.41 22.0193 14.8431 21.9471 15.2729C21.9128 15.4791 21.734 15.6304 21.5277 15.6304H20.9605C20.8367 15.9776 20.6511 16.2973 20.4139 16.5723L20.6958 17.064C20.7989 17.2427 20.7611 17.473 20.5995 17.6037C20.2729 17.8753 19.8982 18.0918 19.496 18.2431C19.3 18.3153 19.08 18.2397 18.9769 18.0575L18.695 17.5659C18.3375 17.6312 17.9662 17.6312 17.6052 17.5659ZM17.2442 15.541C18.5678 16.5586 20.077 15.0494 19.0594 13.7259C17.7359 12.7083 16.2267 14.2175 17.2442 15.541Z"
    />
  </svg>
);

export default Lifecycle;
