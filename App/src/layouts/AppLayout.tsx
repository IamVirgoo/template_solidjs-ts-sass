import {Outlet} from "solid-app-router";

export default function AppLayout() {
    return <>
        <main>
            <Outlet/>
        </main>
    </>
}