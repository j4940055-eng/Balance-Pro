MoneyTalks V11 STARTUP FIX

This fixes the actual startup bug found in V10:
- render() had remained `if(!state.name)` and ignored country/onboarding generation.
- V11 forces onboarding once even when an older name is stored.
- Step 1: name + country.
- Step 2: salary / monthly budget / both / skip.
- Dashboard: greeting with saved name + live local date and time with seconds.
- Existing data is preserved.
