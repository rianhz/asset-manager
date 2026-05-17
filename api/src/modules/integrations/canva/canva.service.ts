import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { CanvaAccessTokens } from './canva.interface';
const canvaBaseUrl = 'https://www.canva.com/api/v1';


const getBasicAuthHeader = (): string => {
    const clientId = process.env.CANVA_CLIENT_ID;
    const clientSecret = process.env.CANVA_CLIENT_SECRET;
    return 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
}

const canvaRequest = async (accessToken: string, path: string, method: string, data?: any, params?: any) => {
    try {
        const config:AxiosRequestConfig = {
            url: `${canvaBaseUrl}${path}`,
            method,
            data,
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        };
        if(data) {
            if(config.headers && config.headers['Content-Type']) {
                config.headers['Content-Type'] = 'application/json';
            }
            config.data = JSON.stringify(data);
        }
        if(params) {
            config.params = params;
        }
        const response = await axios(config);
        return response.data;
    }
    catch (error) {
        if(error instanceof AxiosError) {
            throw new Error(error.response?.data.message || error.response?.data.error || 'Failed to make request to Canva');
        }
        throw new Error('Failed to make request to Canva');
    }
}

const generateAccessToken = async (code: string, codeVerifier: string, redirectUri: string): Promise<CanvaAccessTokens> => {
    try {
        const params = new URLSearchParams();
        params.append('grant_type', 'authorization_code');
        params.append('code', code);
        params.append('code_verifier', codeVerifier);
        params.append('redirect_uri', redirectUri);

        const response = await axios.post(`${canvaBaseUrl}/oauth/token`, params.toString(), {
            headers: {
                'Authorization': getBasicAuthHeader(),
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        const { access_token, refresh_token, expires_in, scope } = response.data;
        const expiryDate = new Date().getTime() + expires_in * 1000;

        return { accessToken: access_token, refreshToken: refresh_token, expiryDate: expiryDate, scope: scope } as CanvaAccessTokens;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw new Error(error.response.data?.message || error.response.data?.error || 'Failed to generate Canva access token');
        }
        throw new Error((error as Error).message || 'Failed to generate Canva access token');
    }
}

const refreshAccessToken = async (refreshToken: string): Promise<CanvaAccessTokens> => {
    try {
        const params = new URLSearchParams();
        params.append('grant_type', 'refresh_token');
        params.append('refresh_token', refreshToken);

        const response = await axios.post(`${canvaBaseUrl}/oauth/token`, params.toString(), {
            headers: {
                'Authorization': getBasicAuthHeader(),
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        const { access_token, refresh_token, expires_in, scope } = response.data;
        const expiryDate = new Date().getTime() + expires_in * 1000;

        return { accessToken: access_token, refreshToken: refresh_token, expiryDate: expiryDate, scope: scope } as CanvaAccessTokens;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw new Error(error.response.data?.message || error.response.data?.error || 'Failed to refresh Canva access token');
        }
        throw new Error((error as Error).message || 'Failed to refresh Canva access token');
    }
}

const revokeToken = async (token: string): Promise<void> => {
    try {
        const params = new URLSearchParams();
        params.append('token', token);

        await axios.post(`${canvaBaseUrl}/oauth/revoke`, params.toString(), {
            headers: {
                'Authorization': getBasicAuthHeader(),
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw new Error(error.response.data?.message || error.response.data?.error || 'Failed to revoke Canva token');
        }
        throw new Error((error as Error).message || 'Failed to revoke Canva token');
    }
}

const introspectToken = async (token: string) => {
    try {
        const response = await axios.post(`${canvaBaseUrl}/oauth/introspect`, {
            token: token,
        });
        return response.data;
    }
    catch (error) {
        throw new Error('Failed to introspect token');
    }
}

const createDesign = async (accessToken: string, options: {
    design_type?: any;
    asset_id?: string;
    title?: string;
}): Promise<any> => {
    return canvaRequest(accessToken, 'POST', '/designs', options);
}

const listDesigns = async (accessToken: string, params?: {
    query?: string;
    continuation?: string;
    limit?: number;
    ownership?: string;
    sort_by?: string;
}): Promise<any> => {
    return canvaRequest(accessToken, 'GET', '/designs', null, params);
}

const getDesign = async (accessToken: string, designId: string): Promise<any> => {
    return canvaRequest(accessToken, 'GET', `/designs/${designId}`);
}

export { generateAccessToken, refreshAccessToken, revokeToken, introspectToken, createDesign, listDesigns, getDesign };