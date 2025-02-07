---  
 
title: "SSO Configuration for B2C"  
draft: false 
type: KB Article
 
---

EAM Authentication is implemented using Azure AD B2C. Azure B2C supports the authentication
of local accounts and accounts in other identity providers (IDPs) through federation. Any IDP that
supports OpenId can be set up with EAM's B2C tenant to enable Single Sign-On (SSO) into the
EAM application.  
To set up SSO with any other IDP, it requires the following two parties to perform specific setups
at their respective ends:

* [IDP provider-Client IT](SSO_Configuration_For_B2C.md#actions-to-be-performed-by-idp-provider-client-it)

* [B2C configurator-EAM Tech Hub](SSO_Configuration_For_B2C.md#actions-to-be-performed-by-aptean-tech-hub)


## Actions to be performed by IDP Provider (Client IT)

Clients who need to perform Single Sign-On (SSO) to the EAM application using the OpenId
protocol should follow the necessary steps in their Identity Provider (IDP) to provide the below-
mentioned information to the representative of Aptean Tech Hub.
* **Domain**: EAM uses the domain part of the email address as a user identifier. Provide the
domain. For example, if the user's email address used to sign in to EAM is
*bob@aptean.com*, the domain would be aptean.com.
* **Metadata UR**L: This URL should return the OpenId metadata for authentication. For
example, <https://login.microsoftonline.com/560ec2b0-xxxx-xxxx-xxxx-a15718863bb6/v2.0/.well-known/openid-configuration>.

* **Client ID**: The client's IT department should create a service principal, application, or its
equivalent in their IDP. The client ID will be used by EAM B2C to communicate with the IDP
to validate the user. After creating the service principal, obtain the Client ID.

* **Client secret**: Create a secret for the service principal. Note that the service principal
should have the necessary permissions to read user profiles in its IDP.
* Make sure that the following claims are present in the authentication response token from
the IDP:
    * issuerUserId
    * givenName
    * surname
    * displayName
    * identityProvider
* Optionally, create a temporary test user account that can be used for setup, testing, and
troubleshooting the configurations.
* While creating the service principal:
    * Enable Access Token and ID Token: In the service principal, enable authentication to
    supply back access token and ID Token in the response.
    * In the authentication system, add the reply URL for production/Test/QA IDPs. The
    reply URL is to be provided by Aptean Tech Hub.
    * Ensure that the service principal has appropriate access to the customer Identity
    management.

### Set up Service Principal using Azure AD

Perform the following steps to set up a service principal using Azure AD:
1. Navigate to App registration and click on **New App Registration**.
2. In the Supported account type section, select **Accounts** in this organizational directory
only.

3. Provide the URL supplied by the Tech Hub in the **Redirect URIs** field. For example, <https://apteanid.b2clogin.com/apteanid.onmicrosoft.com/oauth2/authresp>.

4. Click on **Register**.
5. Navigate to the **Authentication section**.
6. In the Implicit grant and hybrid flow section, select the checkboxes for **Access Token** and ID Token.
7. The redirect URIs provided in step 3 can also be provided or modified from here.
8. Keep the **Allow public client flow** default setting as **No**.
9. Create a client secret by navigating to Certificates and secrets.

10. Under the **API Permissions** section, ensure that the application has been granted
access to the "User.Read" permission for the Microsoft Graph. The grant type should
be set to Delegated.

## Actions to be performed by Aptean Tech Hub

Once the Tech Hub receives the necessary details from the Client IT team, the Tech Hub team can begin configuring the setup. To understand the specific details required from the Client IT team, please refer to the [Actions to be performed by IDP Provider-Client IT](SSO_Configuration_For_B2C.md#actions-to-be-performed-by-idp-provider-client-it) section.
1. In the Identity Experience Framework section of B2C, navigate to the Policy Keys
subsection. Create a new key by providing the following information:
    * **Name**: B2C_1A_EAMClientNameIDPSecret

        > [!Note]:  
        > Enter the ClientName without spaces and ensure that it is not already
        in use.

    * **Options**: Manual
    * **Secret**: Enter the provided secret
    * **Key Usage**: Encryption

2. Download the **B2C_1A_EAM_TRUSTFRAMEWORKEXTENSIONS.xml file from the
Identity Experience Framework** section of B2C.
3. Open the downloaded file in an XML editor.
4. Navigate to the **ClaimsProviders** section of the XML. Add a new child element under this
section to create a new ClaimsProvider entry. Fill in the details for the new ClaimsProvider:

        <ClaimsProvider>

        <Domain>DomainProvidedByClient</Domain>

        <DisplayName>Login using ClientName credentials</DisplayName>
        <TechnicalProfiles>
        <TechnicalProfile Id="ClientNameIDP-OpenIdConnect">
        <DisplayName>ClientName</DisplayName>
        <Description>Login with ClientName account</Description>
        <Protocol Name="OpenIdConnect" />
        <Metadata>
        <Item Key="METADATA">ClientMetadataURL</Item>
        <Item Key="client_id">ClientId</Item>
        <Item Key="response_types">code</Item>
        <Item Key="scope">openid profile</Item>
        <Item Key="response_mode">form_post</Item>
        <Item Key="HttpBinding">POST</Item>
        <Item Key="UsePolicyInRedirectUri">false</Item>
        </Metadata>
        <CryptographicKeys>
        <Key Id="client_secret" StorageReferenceId=" B2C_1A_
        EAMClientNameIDPSecret" />
        </CryptographicKeys>
        <OutputClaims>
        <OutputClaim ClaimTypeReferenceId="issuerUserId"
        PartnerClaimType="oid" />
        <OutputClaim ClaimTypeReferenceId="givenName"
        PartnerClaimType="given_name" />
        <OutputClaim ClaimTypeReferenceId="surName"
        PartnerClaimType="family_name" />
        <OutputClaim ClaimTypeReferenceId="displayName"
        PartnerClaimType="name" />


        <OutputClaim ClaimTypeReferenceId="authenticationSource"
        DefaultValue="socialIdpAuthentication" AlwaysUseDefaultValue="true"
        />
        <OutputClaim ClaimTypeReferenceId="identityProvider"
        DefaultValue="DomainProvidedByClient" />
        </OutputClaims>
        <OutputClaimsTransformations>
        <OutputClaimsTransformation ReferenceId="CreateRandomUPNUserName"
        />
        <OutputClaimsTransformation ReferenceId="CreateUserPrincipalName"
        />
        <OutputClaimsTransformation
        ReferenceId="CreateAlternativeSecurityId" />
        <OutputClaimsTransformation
        ReferenceId="CreateSubjectClaimFromAlternativeSecurityId" />
        </OutputClaimsTransformations>
        <UseTechnicalProfileForSessionManagement ReferenceId="SM-
        SocialLogin" />
        </TechnicalProfile>
        </TechnicalProfiles>
        </ClaimsProvider>

5. Under the **UserJourneys** section, locate the section `<UserJourney
Id="SignUpOrSignIn">`. Within this section, add a new element.

        <UserJourneys>
        <UserJourney Id="SignUpOrSignIn">


        <OrchestrationSteps>
        <OrchestrationStep Order="1" Type="CombinedSignInAndSignUp"
        ContentDefinitionReferenceId="api.signuporsignin">
        <ClaimsProviderSelections>
        <ClaimsProviderSelection
        TargetClaimsExchangeId="ClientNameIdpExchange" />

        
6. Under the Orchestration step of claims exchange, add a new ClaimsExchange record as shown below:

        <OrchestrationStep Order="2" Type="ClaimsExchange">
        <Preconditions>
        <Precondition Type="ClaimsExist" ExecuteActionsIf="true">
        <Value>objectId</Value>
        <Action>SkipThisOrchestrationStep</Action>
        </Precondition>
        </Preconditions>
        <ClaimsExchanges>
        <ClaimsExchange Id="ClientNameIdpExchange"
        TechnicalProfileReferenceId="ClientNameIDP-OpenIdConnect" />
        </ClaimsExchanges>
        </OrchestrationStep>

7. Save the modified document and upload it back to the Azure portal. Go to the **Identity
experience framework** page and navigate to the Custom policies section. Upload the
updated XML document.

8. In the EAM portal, update the Legal Unit's IDP information with the domain name. This
information can be found in the Portal DB under the **LegalUnit.IDPInformation** field.

9. Create a test user in the legal unit by providing the correct IDP User Identifier. This value will
typically be the issuerUserId/oid field from the identity provider.

10. Test the login process for SSO. Verify that the SSO functionality is working as expected.

